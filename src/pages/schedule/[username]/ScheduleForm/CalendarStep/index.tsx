import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimerPicker,
  TimerPickerHeader,
  TimerPickerItem,
  TimerPickerList,
} from './styles'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen>
      <Calendar />

      {isDateSelected && (
        <TimerPicker>
          <TimerPickerHeader>
            terça-feira <span>20 de setembro</span>
          </TimerPickerHeader>

          <TimerPickerList>
            <TimerPickerItem>08:00</TimerPickerItem>
            <TimerPickerItem>09:00</TimerPickerItem>
            <TimerPickerItem>10:00</TimerPickerItem>
            <TimerPickerItem>11:00</TimerPickerItem>
            <TimerPickerItem>12:00</TimerPickerItem>
            <TimerPickerItem>13:00</TimerPickerItem>
            <TimerPickerItem>14:00</TimerPickerItem>
            <TimerPickerItem>15:00</TimerPickerItem>
            <TimerPickerItem>16:00</TimerPickerItem>
            <TimerPickerItem>17:00</TimerPickerItem>
            <TimerPickerItem>18:00</TimerPickerItem>
          </TimerPickerList>
        </TimerPicker>
      )}
    </Container>
  )
}
