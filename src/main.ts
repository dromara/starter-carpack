import * as nc from 'newcar'

new nc.CarEngine().init('https://unpkg.com/canvaskit-wasm@latest/bin/canvaskit.wasm').then(engine => {
  const app = engine.createApp(document.querySelector('#canvas') as HTMLCanvasElement)
  const scene = nc.createScene(
    new nc.Widget()
  )
  app.checkout(scene)
  app.play()
})