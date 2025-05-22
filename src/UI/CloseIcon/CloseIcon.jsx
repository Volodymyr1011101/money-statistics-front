const CloseIcon = ({ onClose, className, width, height }) => (
  <button className={className} onClick={onClose}>
    <svg width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z" />
    </svg>
  </button>
  );

export default CloseIcon