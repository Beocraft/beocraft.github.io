export function cleanUUID(uuid: string) {
    return uuid.replaceAll('-', '')
}

export function addDashesToUUID(uuid: string) {
  return uuid.replace(
    /([0-9a-fA-F]{8})([0-9a-fA-F]{4})([0-9a-fA-F]{4})([0-9a-fA-F]{4})([0-9a-fA-F]{12})/,
    "$1-$2-$3-$4-$5"
  );
}