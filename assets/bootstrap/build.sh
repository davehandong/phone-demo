#!/usr/bin/env sh
rm -rf ./css/*;
echo 'the old css file was removed.'
echo 'building expanded stylesheet...'
sass bootstrap.scss ./css/bootstrap.css --style expanded
echo 'building compressed stylesheet...'
sass bootstrap.scss ./css/bootstrap.min.css --style compressed
echo 'build finished.'
