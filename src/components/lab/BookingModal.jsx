import { useState, useCallback } from "react";
import {
  MapPin,
  Calendar,
  Wallet,
  CheckCircle2,
  Send,
  Share2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScheduleSelector } from "../custom/ScheduleSelector";

// ── Step constants ──
const STEP_SCHEDULE = 0;
const STEP_CONFIRM = 1;
const STEP_LOADING = 2;
const STEP_CONFIRMED = 3;

// ── Social icons (SVG inlined to avoid external deps) ──
function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.492-1.302.48-.428-.012-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsappIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function AlertTriangle({ className }) {
  return (
    <img src={'/alert-triangle.svg'} alt="Alert" className={className} />
  );
}

function SuccessIcon({ className }) {
  return (
    <img src={'/success-icon.svg'} alt="Success" className={className} />
  );
}

// ── Lab info card (reused in Steps 2 & 4) ──
function LabInfoCard({ lab }) {
  return (
    <div className="flex items-start gap-3">
      {/* Jasiri badge */}
      <div className="w-10 h-10 rounded-xl bg-[#1C2A3D] flex items-center justify-center flex-shrink-0">
        <span className="text-white text-[10px] font-bold">
          <span className="text-green-400">●</span> Jasiri
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-slate-400 dark:text-slate-500">Laboratory</p>
        <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
          {lab.name}
        </p>
        <div className="flex items-center gap-1 mt-0.5">
          <MapPin className="w-3 h-3 text-slate-400" />
          <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
            {lab.address}
          </span>
        </div>
      </div>

      {/* Rating */}
      <Badge className="bg-green-500 hover:bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
        ★ {lab.rating}/{lab.reviewCount}
      </Badge>
    </div>
  );
}

// ── Booking detail rows (reused in Steps 2 & 4) ──
function BookingDetails({ price, dateLabel, address }) {
  return (
    <div className="space-y-3 mt-4">
      <div className="flex items-center gap-3">
        <Wallet className="w-4 h-4 text-slate-400 shrink-0" />
        <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
          ₦ {Number(price).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
        <span className="text-sm text-slate-700 dark:text-slate-300">{dateLabel}</span>
      </div>
      <div className="flex items-start gap-3">
        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <span className="text-sm text-slate-700 dark:text-slate-300">{address}</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// STEP 1 – Schedule Selection
// ═══════════════════════════════════════════════════
function StepSchedule({ test, selectedDay, selectedTime, onDayChange, onTimeChange, onBook }) {
  const timeSlots = [
    "09:30 AM", "10:30 AM", "11:30 AM",
    "01:30 PM", "03:00 PM", "03:30 PM",
    "07:00 PM", "09:30 PM",
  ];
  const bookedSlots = ["10:30 AM", "03:30 PM"];

  return (
    <div className="flex flex-col mx-auto max-w-xs sm:max-w-md">
      {/* Test summary card */}
      {test !== null && test !== undefined && <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-2 ">
        {/* Icon */}
        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-3">
         <img src={'/transfusion.png'} alt="Test Icon" className="w-5 h-5" />
        </div>

        {/* Category + Title + Price */}
         <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] text-[#252B61] dark:text-blue-400 font-medium mb-0.5">
              {test.category || "Routine Tests"}
            </p>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
              {test.title}
            </h4>
          </div>

          <div className="text-right shrink-0">
            <p className="text-base font-bold text-slate-900 dark:text-slate-100">
              ₦ {Number(test.price).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
            </p>
            {test.points && (
              <p className="text-[11px] text-green-500 font-semibold">+{test.points} points</p>
            )}
          </div>
        </div>

        {/* Home service row */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
              <MapPin className="w-3 h-3 text-green-600 dark:text-green-400" />
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400">Home Service</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Est. N{Number(test.homeServiceFee || 4000).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div> }

      {/* Schedule selector */}
      <ScheduleSelector
        timeSlots={timeSlots}
        bookedSlots={bookedSlots}
        totalSlots={12}
        selectedDay={selectedDay}
        selectedTime={selectedTime}
        onDayChange={onDayChange}
        onTimeChange={onTimeChange}
      />

      {/* Book Appointment button */}
      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-700">
        <Button
          onClick={onBook}
          disabled={!selectedDay || !selectedTime}
          className="w-full h-12 rounded-full bg-[#252B61] hover:bg-[#1a1f4a] dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-bold disabled:opacity-40"
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// STEP 2 – Confirm Booking Details
// ═══════════════════════════════════════════════════
function StepConfirm({ lab, test, dateLabel, onCancel, onProceed }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Warning icon */}
      <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
        <AlertTriangle className="w-full h-full" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-5">
        Confirm Booking Details
      </h3>

      {/* Details card */}
      <div className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 text-left">
        <LabInfoCard lab={lab} />
        <BookingDetails
          price={test.price}
          dateLabel={dateLabel}
          address={lab.address}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-full mt-6">
        <Button
          variant="outline"
          onClick={onCancel}
          className="flex-1 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700"
        >
          No, Cancel
        </Button>
        <Button
          onClick={onProceed}
          className="flex-[2] h-12 rounded-full bg-[#252B61] hover:bg-[#1a1f4a] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-sm"
        >
          Yes, Proceed
        </Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// STEP 3 – Loading
// ═══════════════════════════════════════════════════
function StepLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Spinner */}
      <div className="w-12 h-12 mb-5 relative">
        <div className="absolute inset-0 rounded-full border-[3px] border-slate-200 dark:border-slate-700" />
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#252B61] dark:border-t-blue-500 animate-spin" />
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Loading, please wait...
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// STEP 4 – Booking Confirmed
// ═══════════════════════════════════════════════════
function StepConfirmed({ lab, test, dateLabel, bookingId, onSeeBookings, onHome }) {
  const socials = [
    { id: "telegram", label: "Telegram", icon: TelegramIcon, color: "text-[#229ED9]" },
    { id: "twitter", label: "Twitter", icon: TwitterIcon, color: "text-slate-800 dark:text-slate-200" },
    { id: "whatsapp", label: "Whatsapp", icon: WhatsappIcon, color: "text-[#25D366]" },
    { id: "other", label: "Other", icon: Share2, color: "text-slate-500" },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Success icon */}
      <div className="w-18 h-18 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-full">
          <SuccessIcon className="w-full h-full" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
        Booking Confirmed
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mb-5">
        Your booking is confirmed. Please find the details for the appointment.
      </p>

      {/* Details card */}
      <div className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 text-left">
        {/* Booking ID */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
          <span className="text-xs text-slate-400">Booking ID :</span>
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
            {bookingId}
          </span>
        </div>

        <LabInfoCard lab={lab} />
        <BookingDetails
          price={test.price}
          dateLabel={dateLabel}
          address={lab.address}
        />

        {/* Email note */}
        <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-4 leading-relaxed">
          We&apos;ve sent a confirmation email to user@email.com.
          If you need to make any changes, visit your account dashboard or contact our support team.
        </p>
      </div>

      {/* Share icons */}
      <div className="flex items-center justify-center gap-6 mt-6 mb-6">
        {socials.map(({ id, label, icon: Icon, color }) => (
          <button key={id} className="flex flex-col items-center gap-1.5 group">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
              <Icon className={cn("w-5 h-5", color)} />
            </div>
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 w-full">
        <Button
          variant="outline"
          onClick={onSeeBookings}
          className="flex-1 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700"
        >
          See Bookings
        </Button>
        <Button
          onClick={onHome}
          className="flex-1 h-12 rounded-full bg-sky hover:bg-[#1a1f4a] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-sm"
        >
          Home
        </Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// MAIN: BookingModal
// ═══════════════════════════════════════════════════
export function BookingModal({
  open,
  onOpenChange,
  test,
  lab = {
    name: "Jasiri Med Laboratory",
    address: "No 26, 62 Road, off 6th Ave. Gwarimpa – Abuja, NG",
    rating: "3.5",
    reviewCount: "503",
  },
  onComplete,
}) {
  const [step, setStep] = useState(STEP_SCHEDULE);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Build date label from selected day + time
  const dateLabel =
    selectedDay && selectedTime
      ? `${selectedDay.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          year: "numeric",
        })} – ${selectedTime}`
      : "";

  const bookingId = `#ER${Math.floor(1000 + Math.random() * 9000)}/${Math.random()
    .toString(36)
    .substring(2, 5)
    .toUpperCase()}`;

  const handleBookAppointment = useCallback(() => {
    setStep(STEP_CONFIRM);
  }, []);

  const handleProceed = useCallback(() => {
    setStep(STEP_LOADING);
    // Simulate API call
    setTimeout(() => {
      setStep(STEP_CONFIRMED);
    }, 2000);
  }, []);

  const handleClose = useCallback(() => {
    setStep(STEP_SCHEDULE);
    setSelectedDay(null);
    setSelectedTime(null);
    onOpenChange?.(false);
  }, [onOpenChange]);

  if (!test) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          "w-[calc(100%-2rem)] xs:max-w-[480px] max-h-[80vh] overflow-y-auto overflow-x-scroll scrollbar-hide p-5 sm:p-5",
          "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-700",
          step === STEP_LOADING && "max-w-[360px]"
        )}
      >
        {/* Accessible hidden title for screen readers */}
        <DialogTitle className="sr-only">Book Appointment</DialogTitle>
        <DialogDescription className="sr-only">
          Schedule and confirm your lab test appointment
        </DialogDescription>

        {step === STEP_SCHEDULE && (
          <StepSchedule
            test={test}
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            onDayChange={setSelectedDay}
            onTimeChange={setSelectedTime}
            onBook={handleBookAppointment}
          />
        )}

        {step === STEP_CONFIRM && (
          <StepConfirm
            lab={lab}
            test={test}
            dateLabel={dateLabel}
            onCancel={() => setStep(STEP_SCHEDULE)}
            onProceed={handleProceed}
          />
        )}

        {step === STEP_LOADING && <StepLoading />}

        {step === STEP_CONFIRMED && (
          <StepConfirmed
            lab={lab}
            test={test}
            dateLabel={dateLabel}
            bookingId={bookingId}
            onSeeBookings={() => {
              handleClose();
              onComplete?.("bookings");
            }}
            onHome={() => {
              handleClose();
              onComplete?.("home");
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
