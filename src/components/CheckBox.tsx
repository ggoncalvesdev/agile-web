import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'
interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  login: string
  password: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  login,
  password,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  useEffect(() => {
    const storedLogin = localStorage.getItem('login')
    const storedPassword = localStorage.getItem('password')
    if (storedLogin === login && storedPassword === password) {
      setIsChecked(true)
    }
  }, [])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    const encryptionKey = 'minha-chave-secreta'
    setIsChecked(checked)
    localStorage.setItem('isChecked', JSON.stringify(checked))
    onChange(checked)

    if (checked) {
      localStorage.setItem('login', login)
      localStorage.setItem(
        'password',
        CryptoJS.AES.encrypt(password, encryptionKey).toString(),
      )
    } else {
      localStorage.removeItem('login')
      localStorage.removeItem('password')
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
