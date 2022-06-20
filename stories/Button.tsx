import React from 'react'

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const baseButton = 'rounded-full font-bold'
  const sizeMode =
    size === 'small'
      ? 'py-1.5 px-4 text-xs'
      : size === 'medium'
      ? 'py-2 px-5 text-sm'
      : size === 'large'
      ? 'py-3 px-6 text-base'
      : ''
  return primary ? (
    <button
      type="button"
      className={`text-red-500 hover:text-white hover:bg-red-400 ${baseButton} ${sizeMode}`}
      {...props}
    >
      {label}
    </button>
  ) : (
    <button
      type="button"
      className={`text-blue-500 hover:text-white hover:bg-blue-400 ${baseButton} ${sizeMode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
