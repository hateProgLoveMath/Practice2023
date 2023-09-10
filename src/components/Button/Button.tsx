import React from 'react'

interface ButtonProps {
    
}

const Button: React.FC<ButtonProps> = () => {
  return (
    <button>
      <div className="logo">
        <img src="src/assets/images/dharma.svg"/>
      </div>
    </button>
  );
};

export default Button;