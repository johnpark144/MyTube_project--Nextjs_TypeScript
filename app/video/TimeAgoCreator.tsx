import TimeAgo from "react-timeago";

function TimeAgoCreator({time}:any) {
    const parsedTime = Date.parse(time)

  return (
    <>
        <TimeAgo date={new Date(parsedTime)} /> 
    </>
  )
}

export default TimeAgoCreator
