export function IconMenu () {
  return (
    <img src='/icons/menu_1_1.svg' alt='Icon' />
  )
}

// eslint-disable-next-line react/prop-types
export function IconHome ({ variant }) {
  if (variant === 1) {
    return (
      <img src='/icons/home_1_1.svg' alt='Icon' />
    )
  } else {
    return (
      <img src='/icons/home_2_1.svg' alt='Icon' />
    )
  }
}

// eslint-disable-next-line react/prop-types
export function IconMaterial ({ variant }) {
  if (variant === 1) {
    return (
      <img src='/icons/material_1_1.svg' alt='Icon' />
    )
  } else {
    return (
      <img src='/icons/material_2_1.svg' alt='Icon' />
    )
  }
}

// eslint-disable-next-line react/prop-types
export function IconManual ({ variant }) {
  if (variant === 1) {
    return (
      <img src='/icons/manual_1_1.svg' alt='Icon' />
    )
  } else {
    return (
      <img src='/icons/manual_2_1.svg' alt='Icon' />
    )
  }
}

// eslint-disable-next-line react/prop-types
export function IconConfig ({ variant }) {
  if (variant === 1) {
    return (
      <img src='/icons/config_1_1.svg' alt='Icon' />
    )
  } else {
    return (
      <img src='/icons/config_2_1.svg' alt='Icon' />
    )
  }
}
