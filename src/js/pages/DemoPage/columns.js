const columns = [
  {
    propertyName: 'id',
    label: 'ID del Edificio',
  },
  {
    propertyName: 'name',
    label: 'Nombre',
  },
  {
    propertyName: 'location',
    label: 'Ubicación',
    template: item => `${item.street}, ${item.city}, ${item.state}, ${item.country}`,
  },
];

export default columns;
