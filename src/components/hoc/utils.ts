function filter<T>(dataset: T[], criteria: (item: T) => boolean) {
  return dataset.filter(criteria);
}

export { filter };
