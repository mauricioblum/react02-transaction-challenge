const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('pt', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'America/Sao_Paulo',
  }).format(date);

export default formatDate;
