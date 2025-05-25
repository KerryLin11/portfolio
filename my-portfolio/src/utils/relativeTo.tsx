export const relativeTo = (
  base: { x: number; y: number },
  offset: { x: number; y: number }
) => ({
  x: base.x + offset.x,
  y: base.y + offset.y,
});

