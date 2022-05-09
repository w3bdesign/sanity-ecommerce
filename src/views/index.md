Usually, the views directory only contains route/page components. For example, if we have a page
that is supposed to allow users to view products, we would have a component Products.tsx in the
views folder, and the corresponding route could be something like this:

`<Route path="/projects" element={<Products />} />`

There is a reason why I said “usually”, though. Many applications have route components in the views
, and the rest of the components for it are placed in the components folder. This approach can work
for small to medium applications but is much harder to manage and maintain when the number of pages
and components grows. The next two sections show a different approach that should make managing
large-scale applications much easier.
28
