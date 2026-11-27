import { BirthdayInput, PhoneNumberInput, ProfilePhoto } from '../inputs'

export const StepProfile = () => {
  return (
    <div>
      <PhoneNumberInput/>
      <BirthdayInput/>
      <ProfilePhoto/>
    </div>
  )
}
