// Drag & Drop Interfaces

export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  // Drag Over Handler is useful
  // for "validating" that we are dropping on a valid place and permit the drop
  dragOverHandler(event: DragEvent): void;
  // We handle the drop after permitting it
  dropHandler(event: DragEvent): void;
  // Useful to revert the visual update if a user abandons the Drag&Drop
  dragLeaveHandler(event: DragEvent): void;
}
