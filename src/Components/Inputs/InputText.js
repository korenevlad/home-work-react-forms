export function InputText({ name, value, type, label, placeholder, description, error, radius, size, withAsterisk }) {
    const styles = {
      xs: ['100px', '10px'],
      sm: ['200px', '20px'],
      md: ['300px', '50px'],
      lg: ['400px', '80px'],
      xl: ['500px', '100px']
    }
    const [width, height] = styles[size]
    return (
      <>
        <label className="form-label mt-4">
          {label}
        </label>
        <input
          name={name}
          value={value}
          className={`form-control rounded-${radius}`}
          type={type}
          placeholder={placeholder}
          description={description}
          error = {error}
          style={{ width: width, height: height }}
          required={withAsterisk}
        />
      </>
    );
  }