export class Validator {
  private readonly MIN_CHARS = 5;

  public validateText(text: string): boolean {
    return text.length < this.MIN_CHARS;
  }

  public validateDate(date: string): string | true {
    const currentDate = new Date();
    const inputDate = new Date(date);
    if (inputDate > currentDate) {
      return 'Your date of birth should be less than today';
    }
    return true;
  }

  public validateRate(rate: string): string | true {
    if (rate === 'Choose') {
      return 'This field is required';
    }
    return true;
  }

  public validatePicture(profilePictures: FileList): string | true {
    const currentPictureFormat = profilePictures[0].name.split('.').at(-1);
    const pictureFormats = ['png', 'jpeg', 'jpg', 'bmp', 'gif', 'svg'];

    if (!pictureFormats.includes(currentPictureFormat!)) {
      return 'Supported formats: png, jpg, jpeg, bmp, gif, svg';
    }
    return true;
  }
}
