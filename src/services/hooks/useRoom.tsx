import { database, ref, set, onValue } from "../firebase";

export default function useRoom() {
  const roomRef = ref(database, 'users/');
onValue(roomRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)})
}