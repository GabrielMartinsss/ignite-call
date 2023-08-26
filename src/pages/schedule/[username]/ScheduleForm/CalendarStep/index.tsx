import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimerPicker,
  TimerPickerHeader,
  TimerPickerItem,
  TimerPickerList,
} from './styles'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { api } from '@/lib/axios'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState(null)

  const router = useRouter()
  const username = String(router.query.username)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        console.log(response.data)
      })
  }, [selectedDate, username])

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimerPicker>
          <TimerPickerHeader>
            {weekDay} <span>{describedDate}</span>
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
