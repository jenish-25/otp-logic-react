# OTP Input Component

A React component for handling OTP (One-Time Password) input fields, featuring auto-focus, digit-wise input, backspace handling, and form validation.

## Features
- Automatically moves to the next field upon input.
- Prevents non-numeric characters from being entered.
- Allows seamless backspace navigation.
- Alerts the user when all OTP fields are filled.

##Try here: https://otp-logic-react.vercel.app/

## Props

| Prop Name | Type  | Description |
|-----------|-------|-------------|
| `number` | `number` | Specifies the number of OTP digits |

## Component Breakdown

- **State Management**: Uses `useState` to manage OTP digits.
- **Ref Handling**: Uses `useRef` for direct DOM manipulation (auto-focus on inputs).
- **Auto Navigation**: Moves cursor to the next input field upon entry.
- **Backspace Handling**: Moves cursor back when deleting an empty field.
- **Validation**: Ensures only numbers are entered.



## License

This project is licensed under the MIT License.

## Author

Developed by jenish(https://github.com/jenish-25). Contributions are welcome!

