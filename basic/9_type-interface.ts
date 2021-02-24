interface DropDown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T, K> extends DropDown<T> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<string, string> = {
  title: 'title',
  value: '??',
  description: 'description',
  tag: 'tag'
}

let array2 = [1, 2, true, 'a']