mkdir -p .bundle

cd .bundle
cp -a ../controllers/ controllers
cp -a ../definitions/ definitions
cp -a ../resources/ resources
cp -a ../private/ private
cp -a ../public/ public
cp -a ../schemas/ schemas
cp -a ../views/ views

# cd ..
total4 --bundle app.bundle
cp app.bundle ../app.bundle

cd ..
rm -rf .bundle
echo "DONE"