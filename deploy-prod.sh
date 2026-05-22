#!/bin/bash

# Deploy script for OmniCommsAI Waitlist Landing Page
# Builds the project and deploys static files to the waitlist-git-pages branch
# for GitHub Pages hosting.
#
# Usage: ./deploy-prod.sh

set -e

SOURCE_BRANCH="waitlist"
DEPLOY_BRANCH="waitlist-git-pages"

echo "Starting production deployment..."
echo "Source: $SOURCE_BRANCH -> Deploy: $DEPLOY_BRANCH"

# Ensure we're on the source branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "$SOURCE_BRANCH" ]; then
  echo "Error: Must be on '$SOURCE_BRANCH' branch. Currently on '$CURRENT_BRANCH'."
  exit 1
fi

# Ensure working tree is clean
if [ -n "$(git status --porcelain)" ]; then
  echo "Error: Working tree is not clean. Commit or stash changes first."
  exit 1
fi

# Step 1: Install dependencies and build
echo "Installing dependencies..."
npm install

echo "Building production bundle..."
npm run build

# Verify dist exists and has content
if [ ! -f "dist/index.html" ]; then
  echo "Error: Build failed — dist/index.html not found."
  exit 1
fi

echo "Build complete. Contents of dist/:"
ls -la dist/

# Step 2: Switch to deploy branch (create as orphan if it doesn't exist)
if git show-ref --quiet refs/heads/$DEPLOY_BRANCH; then
  echo "Switching to existing $DEPLOY_BRANCH branch..."
  git checkout $DEPLOY_BRANCH
  echo "Pulling latest from remote..."
  git pull origin $DEPLOY_BRANCH
else
  echo "Creating new orphan branch $DEPLOY_BRANCH..."
  git checkout --orphan $DEPLOY_BRANCH
  git rm -rf . 2>/dev/null || true
fi

# Step 3: Remove all existing files except dist and .git
echo "Cleaning old deployment files..."
find . -maxdepth 1 ! -name '.' ! -name '.git' ! -name 'dist' -exec rm -rf {} +

# Step 4: Copy dist contents to root (including dotfile dirs like .well-known)
echo "Copying build files to root..."
cp -R dist/. .

# Step 5: Remove dist folder (files are now at root)
echo "Removing dist/ folder..."
rm -rf dist

# Step 6: Stage, commit, and push
echo "Staging changes..."
git add -A

if git diff --cached --quiet; then
  echo "No changes to deploy."
else
  echo "Committing..."
  git commit -m "Deploy waitlist landing page — $(date '+%Y-%m-%d %H:%M:%S')"

  echo "Pushing to remote..."
  git push -u origin $DEPLOY_BRANCH
fi

# Step 7: Switch back to source branch
echo "Switching back to $SOURCE_BRANCH branch..."
git checkout $SOURCE_BRANCH

echo "Deployment complete!"
echo "GitHub Pages should serve from the '$DEPLOY_BRANCH' branch."
echo "Make sure GitHub Pages is configured to deploy from '$DEPLOY_BRANCH' in repo Settings > Pages."
