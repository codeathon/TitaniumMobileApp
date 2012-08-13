/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"AcuP2HxbX9kVABhmEV4Ws76UtW4unEmu"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"Eep3Y1SsB7xu72DydWaobtKt2BXz7RER"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"2UwIARWd5EpYlpsOEP4nes2QvCpnuveb"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"9P60YLnD2xik3pveFTozT25fvs9IUQBD"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"Emo8Z8lykfMre99BMJYyiBIHnWbAbDQj"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"6mPUmFpo87Q8Qry45VTPIvGtJWTXT9zB"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
