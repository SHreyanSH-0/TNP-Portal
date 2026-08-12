export default function RadioCheckboxGroup({
  label,
  name,
  value,
  options,
  onChange,
  required = false,
  error = "",
}) {
  return (
    <div>
      <label className="block font-medium text-gray-700 mb-3">
        {label}
        {required && (
          <span className="text-red-500 ml-1">*</span>
        )}
      </label>

      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange(e);
                } else {
                  onChange({ target: { name, value: "" } });
                }
              }}
              required={required && !value}
            />
            {option}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
