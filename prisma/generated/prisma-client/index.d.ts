// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  category: (where?: CategoryWhereInput) => Promise<boolean>;
  product: (where?: ProductWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  category: (where: CategoryWhereUniqueInput) => CategoryNullablePromise;
  categories: (args?: {
    where?: CategoryWhereInput;
    orderBy?: CategoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Category>;
  categoriesConnection: (args?: {
    where?: CategoryWhereInput;
    orderBy?: CategoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CategoryConnectionPromise;
  product: (where: ProductWhereUniqueInput) => ProductNullablePromise;
  products: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Product>;
  productsConnection: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProductConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCategory: (data: CategoryCreateInput) => CategoryPromise;
  updateCategory: (args: {
    data: CategoryUpdateInput;
    where: CategoryWhereUniqueInput;
  }) => CategoryPromise;
  updateManyCategories: (args: {
    data: CategoryUpdateManyMutationInput;
    where?: CategoryWhereInput;
  }) => BatchPayloadPromise;
  upsertCategory: (args: {
    where: CategoryWhereUniqueInput;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
  }) => CategoryPromise;
  deleteCategory: (where: CategoryWhereUniqueInput) => CategoryPromise;
  deleteManyCategories: (where?: CategoryWhereInput) => BatchPayloadPromise;
  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (args: {
    data: ProductUpdateInput;
    where: ProductWhereUniqueInput;
  }) => ProductPromise;
  updateManyProducts: (args: {
    data: ProductUpdateManyMutationInput;
    where?: ProductWhereInput;
  }) => BatchPayloadPromise;
  upsertProduct: (args: {
    where: ProductWhereUniqueInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  }) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  category: (
    where?: CategorySubscriptionWhereInput
  ) => CategorySubscriptionPayloadSubscription;
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "price_ASC"
  | "price_DESC"
  | "isStock_ASC"
  | "isStock_DESC";

export type CategoryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ProductUpdateManyWithoutCategoryInput {
  create?: Maybe<
    ProductCreateWithoutCategoryInput[] | ProductCreateWithoutCategoryInput
  >;
  delete?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
  connect?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
  set?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
  disconnect?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
  update?: Maybe<
    | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    | ProductUpdateWithWhereUniqueWithoutCategoryInput
  >;
  upsert?: Maybe<
    | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    | ProductUpsertWithWhereUniqueWithoutCategoryInput
  >;
  deleteMany?: Maybe<ProductScalarWhereInput[] | ProductScalarWhereInput>;
  updateMany?: Maybe<
    | ProductUpdateManyWithWhereNestedInput[]
    | ProductUpdateManyWithWhereNestedInput
  >;
}

export type CategoryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface CategoryCreateOneWithoutProductsInput {
  create?: Maybe<CategoryCreateWithoutProductsInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
}

export interface ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyDataInput;
}

export interface ProductCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  price: Float;
  isStock: Boolean;
  category: CategoryCreateOneWithoutProductsInput;
}

export interface ProductUpdateWithoutCategoryDataInput {
  name?: Maybe<String>;
  price?: Maybe<Float>;
  isStock?: Maybe<Boolean>;
}

export interface ProductWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  price?: Maybe<Float>;
  price_not?: Maybe<Float>;
  price_in?: Maybe<Float[] | Float>;
  price_not_in?: Maybe<Float[] | Float>;
  price_lt?: Maybe<Float>;
  price_lte?: Maybe<Float>;
  price_gt?: Maybe<Float>;
  price_gte?: Maybe<Float>;
  isStock?: Maybe<Boolean>;
  isStock_not?: Maybe<Boolean>;
  category?: Maybe<CategoryWhereInput>;
  AND?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  OR?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  NOT?: Maybe<ProductWhereInput[] | ProductWhereInput>;
}

export interface CategorySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CategoryWhereInput>;
  AND?: Maybe<
    CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  >;
  OR?: Maybe<CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput>;
  NOT?: Maybe<
    CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  >;
}

export interface CategoryCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  products?: Maybe<ProductCreateManyWithoutCategoryInput>;
}

export interface CategoryUpsertWithoutProductsInput {
  update: CategoryUpdateWithoutProductsDataInput;
  create: CategoryCreateWithoutProductsInput;
}

export interface ProductCreateManyWithoutCategoryInput {
  create?: Maybe<
    ProductCreateWithoutCategoryInput[] | ProductCreateWithoutCategoryInput
  >;
  connect?: Maybe<ProductWhereUniqueInput[] | ProductWhereUniqueInput>;
}

export interface CategoryUpdateOneRequiredWithoutProductsInput {
  create?: Maybe<CategoryCreateWithoutProductsInput>;
  update?: Maybe<CategoryUpdateWithoutProductsDataInput>;
  upsert?: Maybe<CategoryUpsertWithoutProductsInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
}

export interface ProductCreateWithoutCategoryInput {
  id?: Maybe<ID_Input>;
  name: String;
  price: Float;
  isStock: Boolean;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CategoryUpdateInput {
  name?: Maybe<String>;
  products?: Maybe<ProductUpdateManyWithoutCategoryInput>;
}

export interface CategoryWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  products_every?: Maybe<ProductWhereInput>;
  products_some?: Maybe<ProductWhereInput>;
  products_none?: Maybe<ProductWhereInput>;
  AND?: Maybe<CategoryWhereInput[] | CategoryWhereInput>;
  OR?: Maybe<CategoryWhereInput[] | CategoryWhereInput>;
  NOT?: Maybe<CategoryWhereInput[] | CategoryWhereInput>;
}

export interface CategoryUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface ProductUpdateManyMutationInput {
  name?: Maybe<String>;
  price?: Maybe<Float>;
  isStock?: Maybe<Boolean>;
}

export interface ProductScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  price?: Maybe<Float>;
  price_not?: Maybe<Float>;
  price_in?: Maybe<Float[] | Float>;
  price_not_in?: Maybe<Float[] | Float>;
  price_lt?: Maybe<Float>;
  price_lte?: Maybe<Float>;
  price_gt?: Maybe<Float>;
  price_gte?: Maybe<Float>;
  isStock?: Maybe<Boolean>;
  isStock_not?: Maybe<Boolean>;
  AND?: Maybe<ProductScalarWhereInput[] | ProductScalarWhereInput>;
  OR?: Maybe<ProductScalarWhereInput[] | ProductScalarWhereInput>;
  NOT?: Maybe<ProductScalarWhereInput[] | ProductScalarWhereInput>;
}

export interface ProductUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutCategoryDataInput;
  create: ProductCreateWithoutCategoryInput;
}

export interface ProductUpdateManyDataInput {
  name?: Maybe<String>;
  price?: Maybe<Float>;
  isStock?: Maybe<Boolean>;
}

export interface ProductUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutCategoryDataInput;
}

export interface CategoryUpdateWithoutProductsDataInput {
  name?: Maybe<String>;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProductWhereInput>;
  AND?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  OR?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  NOT?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
}

export interface CategoryCreateWithoutProductsInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface ProductUpdateInput {
  name?: Maybe<String>;
  price?: Maybe<Float>;
  isStock?: Maybe<Boolean>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutProductsInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ProductPreviousValues {
  id: ID_Output;
  name: String;
  price: Float;
  isStock: Boolean;
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  price: () => Promise<Float>;
  isStock: () => Promise<Boolean>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  isStock: () => Promise<AsyncIterator<Boolean>>;
}

export interface AggregateCategory {
  count: Int;
}

export interface AggregateCategoryPromise
  extends Promise<AggregateCategory>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCategorySubscription
  extends Promise<AsyncIterator<AggregateCategory>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CategorySubscriptionPayload {
  mutation: MutationType;
  node: Category;
  updatedFields: String[];
  previousValues: CategoryPreviousValues;
}

export interface CategorySubscriptionPayloadPromise
  extends Promise<CategorySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CategoryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CategoryPreviousValuesPromise>() => T;
}

export interface CategorySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CategorySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CategorySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CategoryPreviousValuesSubscription>() => T;
}

export interface CategoryEdge {
  node: Category;
  cursor: String;
}

export interface CategoryEdgePromise
  extends Promise<CategoryEdge>,
    Fragmentable {
  node: <T = CategoryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CategoryEdgeSubscription
  extends Promise<AsyncIterator<CategoryEdge>>,
    Fragmentable {
  node: <T = CategorySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface Product {
  id: ID_Output;
  name: String;
  price: Float;
  isStock: Boolean;
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  price: () => Promise<Float>;
  isStock: () => Promise<Boolean>;
  category: <T = CategoryPromise>() => T;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  isStock: () => Promise<AsyncIterator<Boolean>>;
  category: <T = CategorySubscription>() => T;
}

export interface ProductNullablePromise
  extends Promise<Product | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  price: () => Promise<Float>;
  isStock: () => Promise<Boolean>;
  category: <T = CategoryPromise>() => T;
}

export interface Category {
  id: ID_Output;
  name: String;
}

export interface CategoryPromise extends Promise<Category>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  products: <T = FragmentableArray<Product>>(args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface CategorySubscription
  extends Promise<AsyncIterator<Category>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  products: <T = Promise<AsyncIterator<ProductSubscription>>>(args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface CategoryNullablePromise
  extends Promise<Category | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  products: <T = FragmentableArray<Product>>(args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface CategoryConnection {
  pageInfo: PageInfo;
  edges: CategoryEdge[];
}

export interface CategoryConnectionPromise
  extends Promise<CategoryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CategoryEdge>>() => T;
  aggregate: <T = AggregateCategoryPromise>() => T;
}

export interface CategoryConnectionSubscription
  extends Promise<AsyncIterator<CategoryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CategoryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCategorySubscription>() => T;
}

export interface CategoryPreviousValues {
  id: ID_Output;
  name: String;
}

export interface CategoryPreviousValuesPromise
  extends Promise<CategoryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface CategoryPreviousValuesSubscription
  extends Promise<AsyncIterator<CategoryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
