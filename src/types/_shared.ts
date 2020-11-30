import { Types } from 'mongoose';

// schema variables
export type Id = '_id';
export type VerOption = 'versionKey';
export type VerKey = '__v';
export type Timestamps = 'timestamps';
export type CreatedAt = 'createdAt';
export type UpdatedAt = 'updatedAt';

// type option variables
export type Required = 'required';
export type Select = 'select';
export type Enum = 'enum';

// subDocument
export interface SubDocumentNoId extends Omit<Types.Subdocument, Id> {}
export interface SubDocument extends Types.Subdocument {}

// subDocument array
export interface SubDocumentArray<T extends SubDocument>
  extends Types.DocumentArray<T> {
  filter<S extends T>(
    callbackfn: (
      value: T,
      index: number,
      array: SubDocumentArray<T>
    ) => value is S,
    thisArg?: any
  ): S[] & SubDocumentArray<S>;
  filter(
    callbackfn: (
      value: T,
      index: number,
      array: SubDocumentArray<T>
    ) => unknown,
    thisArg?: any
  ): SubDocumentArray<T>;
}
export interface SubDocumentArrayNoId<T extends SubDocumentNoId>
  extends Types.Array<T> {
  create(obj: any): T;
  inspect(): T[];
  toObject(options?: any): T[];
  filter<S extends T>(
    callbackfn: (
      value: T,
      index: number,
      array: SubDocumentArrayNoId<T>
    ) => value is S,
    thisArg?: any
  ): S[] & SubDocumentArrayNoId<S>;
  filter(
    callbackfn: (
      value: T,
      index: number,
      array: SubDocumentArrayNoId<T>
    ) => unknown,
    thisArg?: any
  ): SubDocumentArrayNoId<T>;
}
