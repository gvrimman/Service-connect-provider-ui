import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for visibility toggle

const InputFieldAds = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  inputWidth = "100%",
  inputHeight = "48px",
  icon,
  isTextArea = false, // New prop to handle textarea
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Check if the current input field is a password field
  const isPasswordField = type === "password";

  return (
    <div className="flex flex-col">
      <div className="relative">
        {icon && (
          <img
            src={icon}
            alt={`${name} icon`}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-gray"
          />
        )}
        {isTextArea ? (
          <textarea
            className={`px-4 py-2 mt-1 rounded-md border border-light-gray bg-primary font-input text-dark-gray focus:outline-none focus:ring-2 focus:ring-secondary ${icon ? 'pl-10' : ''}`}
            style={{
              width: inputWidth,
              fontSize: "14px",
              height: inputHeight || "100px", // Height can be adjusted for textarea
            }}
            name={name}
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
          />
        ) : (
          <input
            className={`px-4 py-2 mt-1 rounded-md border border-light-gray bg-primary font-input text-dark-gray focus:outline-none focus:ring-2 focus:ring-secondary ${icon ? 'pl-10' : ''}`}
            style={{
              width: inputWidth,
              height: inputHeight,
              fontSize: "14px",
            }}
            type={isPasswordField && showPassword ? "text" : type} // Toggle between 'text' and 'password'
            name={name}
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}

        {/* Show/Hide Password Button */}
        {isPasswordField && (
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-dark-gray"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        )}
      </div>
      {touched && error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputFieldAds;