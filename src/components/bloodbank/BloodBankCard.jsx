import { Heart, HeartPlus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

export function BloodBankCard({
  title,
  description,
  price,
  points,
  onBook,
  onSave,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const handlelike = () => {
    setIsLiked(!isLiked);
    onLike();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Icon Section */}
      <div className="p-4 flex items-center h-24">
          <img src="/blooddrop.svg" alt="Blood Drop Icon" className="w-12 h-12 text-red-600" />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-1 text-start">
        {/* Title */}
        <h3 className="font-bold text-lg text-sky line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs text-sky font-normal max-w-[250px] line-clamp-7">
            {description}
          </p>
        )}

        {/* Price and Points */}
        <div className="space-y-1">
          <p className="text-lg tracking-wide font-medium text-sky">
            ₦ {price?.toLocaleString()}
          </p>
          <p className="text-sm font-medium text-green-600">
            +{points} points
          </p>
        </div>

        {/* Button Section */}
        <div className="flex gap-2 pt-2">
          <Button
            onClick={onSave}
            className="flex-1 bg-sky hover:bg-sky-900 text-white font-semibold py-6 px-3 rounded-xl transition-colors text-sm"
          >
            Add to Cart
          </Button>
          <Button
            onClick={handlelike}
            variant={'outline'}
            className={`py-6 w-12 border rounded-xl transition-colors ${
              isLiked
                ? 'bg-red-50 border-red-300'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <HeartPlus
              size={20}
              className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
