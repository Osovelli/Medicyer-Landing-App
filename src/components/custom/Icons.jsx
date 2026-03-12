export const TransfusionIcon = () => (
  <img
    src="/transfusion.svg"
    alt="Transfusion Icon"
    className="w-5 h-5 text-blue-600 dark:text-blue-400"
  />
);

export const FolderIcon = () => (
  <img
    src="/foldericon.svg"
    alt="Folder Icon"
    className="w-5 h-5 text-blue-600 dark:text-blue-400"
  />
);

export const TubeIcon = ({ className, ...props }) => (
  <img
    src="/tube.svg"
    alt="Tube Icon"
    className={`w-5 h-5 text-blue-600 dark:text-blue-400 ${className || ""}`}
    {...props}
  />
);

export const WavesIcon = ({ className, ...props }) => (
  <img
    src="/waves.svg"
    alt="Waves Icon"
    className={`w-5 h-5 text-blue-600 dark:text-blue-400 ${className || ""}`}
    {...props}
  />
);

export const SuccessIcon = ({ className, ...props }) => (
  <img
    src="/success-icon.svg"
    alt="Success Icon"
    className={`w-5 h-5 text-green-600 dark:text-green-400 ${className || ""}`}
    {...props}
  />  
);

export const MapPinIcon = ({ className, ...props }) => (
  <img
    src="/map pin.svg"
    alt="Map Pin Icon"
    className={`w-5 h-5 text-gray-600 dark:text-gray-400 ${className || ""}`}
    {...props}
  />
);

export const MaleIcon = ({ className, ...props }) => (
  <img 
    src="/male icon.svg"
    alt="male icon"
    className={`w-5 h-5 text-gray-600 dark:text-gray-400 ${className || ""}`}
      {...props}
  />
);

export const FemaleIcon = ({ className, ...props }) => (
  <img 
    src="/female icon.svg"
    alt="female icon"
    className={`w-5 h-5 text-gray-600 dark:text-gray-400 ${className || ""}`}
      {...props}
  />
);