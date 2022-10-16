export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "Eddie" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};

export const pokePrefix = (store) => (next) => (actionName) => {
  const newData = actionName.payload.map((pokemon) => {
    return { ...pokemon, name: `Poke ${pokemon.name}` };
  });
  const editedAction = {
    ...actionName,
    action: { ...actionName.action, payload: newData },
  };
  next(editedAction);
};
