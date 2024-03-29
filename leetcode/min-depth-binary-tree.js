// #111

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down 
// to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

const minDepth = root => {
  if (!root) return 0;
  if (root.right === null) return 1 + minDepth(root.left);
  if (root.left === null) return 1 + minDepth(root.right);

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

export default minDepth