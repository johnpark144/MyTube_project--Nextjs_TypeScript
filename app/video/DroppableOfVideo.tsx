import { Droppable } from "react-beautiful-dnd";
import DraggableInDroppableOfVideo from "./DraggableInDroppableOfVideo";

function DroppableOfVideo({ data, showWatchLater, watchLaterData }: DroppableOfVideoProps) {
  return (
    <Droppable droppableId="videos" isDropDisabled={!showWatchLater}>
      {(provided) => (
        <div
          className="flex justify-evenly items-center flex-wrap"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {data?.map(
            (
              arr: DataArr,
              idx: number
            ) => {
              return (
                <DraggableInDroppableOfVideo arr={arr} idx={idx} 
                showWatchLater={showWatchLater} watchLaterData={watchLaterData} data={data} />
              );
            }
          )}
          {provided.placeholder}{" "}
          {/* 드래그해도 draggable한 영역을 그대로 유지하게함 */}
        </div>
      )}
    </Droppable>
  );
}

export default DroppableOfVideo;
