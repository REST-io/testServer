# 실행하고자 하는 명령 예시
kubectl hlf chaincode invoke --config=/root/org1.yaml \
    --user=admin --peer=org1-peer0.default \
    --chaincode=asset --channel=demo \
    --fcn=$1 -a '[]'
