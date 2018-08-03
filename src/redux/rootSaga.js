import { dummySaga } from "./modules/dummy"

export default function* rootSaga() {
  yield [dummySaga()]
}
