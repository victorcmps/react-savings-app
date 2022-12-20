type SetData = {
  amount: number;
  date: Date;
};

const localStorageKey = 'data';

export function useLocalStorage() {
  const getAll = () => {
    const data = window.localStorage.getItem(localStorageKey);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };
  const getKey = (key: string) => {
    const data = getAll();

    if (data) {
      return data[key];
    }

    return null;
  };
  const setKey = (key: string, data: SetData) => {
    const localStorageData = getAll();

    const payload = {
      ...localStorageData,
      [key]: data,
    };

    window.localStorage.setItem(localStorageKey, JSON.stringify(payload));
    return;
  };

  return { getAll, getKey, setKey };
}
