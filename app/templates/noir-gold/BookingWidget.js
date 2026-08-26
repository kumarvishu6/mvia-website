"use client";

import { useMemo, useState } from "react";
import s from "./styles.module.css";

const TIME_SLOTS = ["7:00 AM", "9:00 AM", "11:30 AM", "1:00 PM", "4:00 PM", "6:30 PM"];
const INTERESTS = [
  "Private In-Home Training",
  "Studio Class Trial",
  "Corporate Wellness Proposal",
  "Retreat Information",
  "Not Sure Yet",
];

function getUpcomingDays(count) {
  const days = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export default function BookingWidget() {
  const days = useMemo(() => getUpcomingDays(7), []);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed && selectedDay && selectedTime) {
    const dayLabel = selectedDay.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    return (
      <div className={s.bookingCard}>
        <div className={s.bookingSuccessMark}>&#10003;</div>
        <h3>Request received.</h3>
        <p>
          We&apos;ll confirm your session &mdash; {interest.toLowerCase()} &mdash; for {dayLabel} at{" "}
          {selectedTime}, by email within one business day.
        </p>
        <button
          type="button"
          className={s.btnGhost}
          onClick={() => {
            setConfirmed(false);
            setSelectedDay(null);
            setSelectedTime(null);
          }}
        >
          Book another time
        </button>
      </div>
    );
  }

  return (
    <div className={s.bookingCard}>
      <div className={s.bookingHead}>
        <div className={`${s.eyebrow} ${s.eyebrowCenter}`}>Book a Consultation</div>
        <h3>Pick a day and time.</h3>
      </div>

      <div className={s.bookingField}>
        <label htmlFor="ng-interest">What are you interested in?</label>
        <select
          id="ng-interest"
          className={s.bookingSelect}
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          {INTERESTS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className={s.bookingDays}>
        {days.map((d) => {
          const isSelected = selectedDay && d.toDateString() === selectedDay.toDateString();
          return (
            <button
              type="button"
              key={d.toISOString()}
              className={`${s.dayChip} ${isSelected ? s.dayChipActive : ""}`}
              onClick={() => setSelectedDay(d)}
            >
              <span>{d.toLocaleDateString("en-US", { weekday: "short" })}</span>
              <strong>{d.getDate()}</strong>
            </button>
          );
        })}
      </div>

      <div className={s.bookingTimes}>
        {TIME_SLOTS.map((t) => (
          <button
            type="button"
            key={t}
            disabled={!selectedDay}
            className={`${s.timeChip} ${selectedTime === t ? s.timeChipActive : ""}`}
            onClick={() => setSelectedTime(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={s.bookingConfirm}
        disabled={!selectedDay || !selectedTime}
        onClick={() => setConfirmed(true)}
      >
        Confirm Booking
      </button>
      <p className={s.bookingNote}>Demo scheduler for design review &mdash; no appointment is actually booked.</p>
    </div>
  );
}
