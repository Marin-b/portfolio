export default (ctx, width, height) => {
  const DOTS = []
  let animating
  let WIDTH = width;
  let HEIGHT = height;

  /*const checkCollision = (a) => {
    let ret = undefined;
    for(let i = 0; i < DOTS.length; i++) {
      const b = DOTS[i]
      if (a.id !== b.id) {
        const dist = (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
        if ( dist < (b.radius + a.radius) * (a.radius + b.radius) ) {
          ret = b
          break;
        }
      }
    }
    return ret;
  }

  const bounce = (dot, collider) => {
    const dx = collider.x - dot.x;
    const dy = collider.y - dot.y;
    const dist = Math.sqrt(dx * dx, dy * dy)
    const ang = Math.atan2(dy, dx);
    const minDist = dot.radius + collider.radius
    const tx = dot.x +  Math.cos(ang) * minDist
    const ty = dot.y +  Math.sin(ang) * minDist
    const ax = tx - collider.x
    const ay = ty - collider.y

    dot.x -= ax
    dot.y -= ay
     // and b2 in the other direction
    collider.x += ax
    collider.y += ay

    dot.velX = (dot.velX * (dot.radius - collider.radius) + (2 * collider.radius * collider.velX)) / (dot.radius + collider.radius)
    dot.velY = (dot.velY * (dot.radius - collider.radius) + (2 * collider.radius * collider.velY)) / (dot.radius + collider.radius)
    collider.velX = (collider.velX * (collider.radius - dot.radius) + (2 * dot.radius * dot.velX)) / (dot.radius + collider.radius)
    collider.velY = (collider.velY * (collider.radius - dot.radius) + (2 * dot.radius * dot.velY)) / (dot.radius + collider.radius)
}
*/

  const draw = (dot) => {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI)
    ctx.fill()
  }


  const update = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    DOTS.forEach(dot => {
      dot.x += dot.velX;
      dot.y += dot.velY;
      if (dot.x <= dot.radius || dot.x >= WIDTH - dot.radius) {
        dot.velX = -dot.velX
      }
      if (dot.y <= dot.radius || dot.y >= HEIGHT - dot.radius) {
        dot.velY = -dot.velY
      }
    })
    //DOTS.forEach(dot => {
      //const collider = checkCollision(dot)
      //if (collider) {
       //bounce(dot, collider)
     //}
    //})
    DOTS.forEach(dot => {
      draw(dot)
    })
    if (animating) {
      window.requestAnimationFrame(update)
    }
  }

  const init = () => {
    const n = width < 1000 ? width : 1000
    for( let i = 0; i < n; i++) {
      const rad = 1
      DOTS.push({
        id: i,
        x: Math.random() * ((WIDTH - rad) - rad) + rad,
        y: Math.random() * ((HEIGHT - rad) - rad) + rad,
        radius: rad,
        velX: Math.random(),
        velY: Math.random(),
      })
    }
    animating = true
    window.requestAnimationFrame(update)
  }

  const pause =() => {
    animating = false
  }

  const unpause = () => {
    if (animating) { return }

    animating = true
    window.requestAnimationFrame(update)
  }

  const sizeUpdate = (width, height) => {
    WIDTH = width;
    HEIGHT = height;
  }
  init()

  return { pause, unpause, sizeUpdate }
}
