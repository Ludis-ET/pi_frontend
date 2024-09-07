import { Calendar } from "./Calendar"
import { Top } from "./Top"

export const RightBar = () => {
  return (
    <div className="bg-purple-600 w-1/4">
      <Top />
      <Calendar />
    </div>
  )
}
