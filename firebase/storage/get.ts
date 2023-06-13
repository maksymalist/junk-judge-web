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

export const listAllItemsWithURL = async (path: string) => {
  const storageRef = ref(storage, path);
  const listResult = await listAll(storageRef);
  const items = [];

  for (const item of listResult.items) {
    const type = item.parent?.name || "trash";
    const key = item.name;
    const url = `https://storage.googleapis.com/junk-judge.appspot.com/${path}/${key}`;

    console.log(url);

    const new_item = {
      type,
      key,
      url,
    };

    items.push(new_item);
  }

  return items;
};

export const listItemWithURL = async (path: string, key: string) => {
  return {
    type: path,
    key,
    url: `https://storage.googleapis.com/junk-judge.appspot.com/${path}/${key}`,
  };
};
