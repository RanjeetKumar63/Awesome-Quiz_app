import { openDB } from "idb";

const DB_NAME = "QuizDB";
const STORE_NAME = "quizHistory";

// Initialize IndexedDB
const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

// Save Quiz Result
export const saveQuizResult = async (quizData) => {
  const db = await initDB();
  await db.add(STORE_NAME, quizData);
};

// Get All Quiz History
export const getQuizHistory = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

// Clear Quiz History
export const clearQuizHistory = async () => {
  const db = await initDB();
  await db.clear(STORE_NAME);
};
