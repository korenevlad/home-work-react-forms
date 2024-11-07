export function InputText({ type, label, placeholder }) {
    return (
      <>
        <label className="form-label mt-4">
          {label}
        </label>
        <input
          id="InputEmail"
          className="form-control"
          type={type}
          placeholder={placeholder}
        />
      </>
    );
  }