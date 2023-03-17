import React, { useState } from 'react'
import Cookies from 'js-cookie'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setIsChecked(checked)
    onChange(checked)

    const login = 'login'
    const password = 'password'

    if (checked) {
      Cookies.set('login', login, { httpOnly: true, secure: true })
      Cookies.set('password', password, { httpOnly: true, secure: true })
    } else {
      Cookies.remove('login')
      Cookies.remove('password')
    }
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  )
}
