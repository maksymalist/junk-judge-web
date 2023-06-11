import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import firebase_app from "../config";
import { type } from "os";

const storage = getStorage(firebase_app);

export const getItemURL = async (path: string, child: string) => {
  const storageRef = ref(storage, path);
  const childRef = ref(storageRef, child);
  const url = await getDownloadURL(childRef);
  return url;
};

export const listAllItems = async (path: string) => {
  const storageRef = ref(storage, path);
  const listResult = await listAll(storageRef);
  return listResult.items.map((item) => {
    const type = item.parent?.name || "trash";
    const key = item.name;
    return {
      type,
      key,
    };
  });
};
