export function Home() {
  return (
    <div>
      <form action="">
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" />

        <label htmlFor="minutesAmount">durante</label>
        <input
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
        />

        <span>minutos.</span>
        <input />
        <input />
      </form>
    </div>
  )
}
