function isTouching(object1, object2) {

  if (Number(object1.x - object2.x) < Number(object2.width / 2 + object1.width / 2) &&
    Number(object2.x - object1.x) < Number(object2.width / 2 + object1.width / 2) &&
    Number(object1.y - object2.y) < Number(object2.height / 2 + object1.height / 2) &&
    Number(object2.y - object2.y < object2.height / 2 + object1.height / 2)
  ) {
    return true;
  }
}
function hasCollided(lbullet, lwall) {
  bulletRigthEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x
  if (bulletRigthEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}
