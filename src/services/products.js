import { db } from "./firebase";
import { collection, getDocs, getDoc, doc, query, where, limit } from "firebase/firestore";

export async function getProducts({ categoryId, pageLimit = 24 } = {}) {
  const col = collection(db, "items");
  const q = categoryId ? query(col, where("category","==",categoryId), limit(pageLimit)) : query(col, limit(pageLimit));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductById(id) {
  const snap = await getDoc(doc(db, "items", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}