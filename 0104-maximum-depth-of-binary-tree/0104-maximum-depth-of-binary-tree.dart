/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */

import 'dart:math' as math;

class Solution {
  int maxDepth(TreeNode? root) {
    if (root == null) {

      return 0;
    } else {
      int leftDepth = maxDepth(root.left);
      int rightDepth = maxDepth(root.right);
      return 1 + math.max(leftDepth, rightDepth);
    }
  }
}