function isTouching(movingRect,ob1){
    if (movingRect.x - ob1.x <ob1.width/2 + movingRect.width/2
      && ob1.x - movingRect.x < ob1.width/2 + movingRect.width/2
      && movingRect.y - ob1.y < ob1.height/2 + movingRect.height/2
      && ob1.y - movingRect.y < ob1.height/2 + movingRect.height/2) {
   return true
  }
  else {
   return false
  }
  }