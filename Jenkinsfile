#!groovy
import java.text.SimpleDateFormat

node('slave') {
    stage('Checkout source code') {
        checkout scm
        env.GIT_COMMIT = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
    }
    
    stage('Build for Nimble UI') {
        def dateFormat = new SimpleDateFormat("yyyyMMddHHmmss")
        def date = new Date()
        def PORTAL_UI_TAR_FILE = BRANCH_NAME + '_' + dateFormat.format(date) + '.tar.gz'
        env.PORTAL_UI_TAR_FILE = PORTAL_UI_TAR_FILE

        // file created at webapp/$PORTAL_UI_TAR_FILE
        sh '''
            cd webapp
            export app_base_url='/InfoSight/ui'
            export api_base_url='/InfoSight/api'
            export server_base_url='/InfoSight'
            export use_nimble_backend=true
            tar cvzf ${PORTAL_UI_TAR_FILE} dist/ doc/ static/
        '''
        // Do not enable this upload
        /*
        def server = Artifactory.server 'artifactory1'
        def buildInfo = Artifactory.newBuildInfo()
        buildInfo.name = "infosight-portal-ui" + "-" + BRANCH_NAME
        buildInfo.number = BUILD_NUMBER
        buildInfo.env.capture = true

        // Upload spec
        def uploadSpec = readFile 'artifactory-upload.json'

        // Upload to Artifactory.
        server.upload spec: uploadSpec, buildInfo: buildInfo, failNoOp: true
        
        // Publish build info.
        server.publishBuildInfo buildInfo
        */
    }

    stage('Build backend') {
         /*sh '''
            pwd
            ls
        '''*/

        def server = Artifactory.server 'artifactory1'
         // Download spec
        def downloadSpec = readFile 'artifactory-download.json'
        server.download spec: downloadSpec

        /*sh '''
            pwd
            ls
            cd backend
            ./gradlew clean build
        '''

        sh '''
            pwd
            ls
            cd ui-war
            ls
            jar -cvf ui-war.war *
            ls
        '''*/
        }
}
