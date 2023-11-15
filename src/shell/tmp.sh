#!/bin/bash -l

# 실행하고자 하는 명령 예시
kubectl hlf chaincode invoke --config=/home/ubuntu/org1.yaml \
    --user=admin --peer=$3.default \
    --chaincode=asset --channel=demo \
    --fcn=$1 $2
