export class Validator {
  private readonly MIN_CHARS = 5;
  private readonly PICTURE_FORMATS = ['png', 'jpeg', 'jpg', 'bmp', 'gif', 'svg'];

  public validateText(text: string): boolean {
    return text.length < this.MIN_CHARS;
  }

  public validateDate(birthday: string): boolean {
    const currentDate = new Date();
    const inputDate = new Date(birthday);
    return inputDate > currentDate;
  }

  public validatePicture(profilePicture: File): boolean {
    const currentPictureFormat = profilePicture.name.split('.').at(-1);
    if (currentPictureFormat) {
      return !this.PICTURE_FORMATS.includes(currentPictureFormat);
    }
    return true;
  }
}
